import { useState, useMemo, useCallback } from "react";
import { quizQuestions, quizCategories, type QuizCategory, type QuizDifficulty, type QuizQuestion } from "@/lib/quiz-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Trophy, RotateCcw, ArrowRight, Brain, Target, Zap, ChevronRight, Timer } from "lucide-react";

type QuizState = "setup" | "playing" | "review" | "complete";

interface AnswerRecord {
  questionId: string;
  selectedIndex: number;
  correct: boolean;
}

export function QuizSection() {
  const [state, setState] = useState<QuizState>("setup");
  const [categoryFilter, setCategoryFilter] = useState<QuizCategory | "all">("all");
  const [difficultyFilter, setDifficultyFilter] = useState<QuizDifficulty | "all">("all");
  const [questionCount, setQuestionCount] = useState(10);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [quizQuestionSet, setQuizQuestionSet] = useState<QuizQuestion[]>([]);

  const availableQuestions = useMemo(() => {
    let filtered = [...quizQuestions];
    if (categoryFilter !== "all") {
      filtered = filtered.filter(q => q.category === categoryFilter);
    }
    if (difficultyFilter !== "all") {
      filtered = filtered.filter(q => q.difficulty === difficultyFilter);
    }
    return filtered;
  }, [categoryFilter, difficultyFilter]);

  const startQuiz = useCallback(() => {
    const shuffled = [...availableQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));
    setQuizQuestionSet(selected);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnswers([]);
    setState("playing");
  }, [availableQuestions, questionCount]);

  const handleAnswer = useCallback((index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    const current = quizQuestionSet[currentIndex];
    setAnswers(prev => [...prev, {
      questionId: current.id,
      selectedIndex: index,
      correct: index === current.correctIndex
    }]);
  }, [selectedAnswer, quizQuestionSet, currentIndex]);

  const nextQuestion = useCallback(() => {
    if (currentIndex + 1 >= quizQuestionSet.length) {
      setState("complete");
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  }, [currentIndex, quizQuestionSet.length]);

  const resetQuiz = useCallback(() => {
    setState("setup");
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnswers([]);
    setQuizQuestionSet([]);
  }, []);

  const score = answers.filter(a => a.correct).length;
  const totalAnswered = answers.length;

  const getScoreMessage = (score: number, total: number) => {
    const pct = (score / total) * 100;
    if (pct === 100) return { text: "Perfect Score! You're a stormwater modeling expert!", icon: "🏆" };
    if (pct >= 80) return { text: "Excellent! You really know your stuff!", icon: "🌟" };
    if (pct >= 60) return { text: "Good job! Solid understanding of the fundamentals.", icon: "👍" };
    if (pct >= 40) return { text: "Not bad! Review the explanations to strengthen your knowledge.", icon: "📚" };
    return { text: "Keep learning! Check out the newsletters and learning paths for more.", icon: "💪" };
  };

  const getDifficultyColor = (d: QuizDifficulty) => {
    switch (d) {
      case "beginner": return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300";
      case "intermediate": return "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300";
      case "advanced": return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
    }
  };

  const savedHighScore = typeof window !== "undefined" ? localStorage.getItem("quiz_high_score") : null;
  const highScore = savedHighScore ? JSON.parse(savedHighScore) : null;

  if (state === "setup") {
    const categoryCounts: Record<string, number> = {};
    quizQuestions.forEach(q => {
      categoryCounts[q.category] = (categoryCounts[q.category] || 0) + 1;
    });

    return (
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <Brain className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-serif font-medium mb-2" data-testid="text-quiz-title">Test Your Knowledge</h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Challenge yourself with {quizQuestions.length} questions covering SWMM5, hydraulics, ICM InfoWorks, Ruby scripting, and stormwater history.
          </p>
          {highScore && (
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-sm">
              <Trophy className="w-4 h-4" />
              Best: {highScore.score}/{highScore.total} ({Math.round((highScore.score / highScore.total) * 100)}%)
            </div>
          )}
        </div>

        <div className="bg-card/60 border border-border rounded-xl p-6 space-y-6">
          <div>
            <label className="text-sm font-medium mb-3 block">Category</label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategoryFilter("all")}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  categoryFilter === "all"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
                data-testid="quiz-category-all"
              >
                All ({quizQuestions.length})
              </button>
              {quizCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    categoryFilter === cat
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                  data-testid={`quiz-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {cat} ({categoryCounts[cat] || 0})
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-3 block">Difficulty</label>
            <div className="flex gap-2">
              {(["all", "beginner", "intermediate", "advanced"] as const).map(d => (
                <button
                  key={d}
                  onClick={() => setDifficultyFilter(d)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    difficultyFilter === d
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                  data-testid={`quiz-difficulty-${d}`}
                >
                  {d === "all" ? "All Levels" : d.charAt(0).toUpperCase() + d.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-3 block">Number of Questions</label>
            <div className="flex gap-2">
              {[5, 10, 15, 20].map(n => (
                <button
                  key={n}
                  onClick={() => setQuestionCount(n)}
                  disabled={availableQuestions.length < n}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    questionCount === n
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : availableQuestions.length < n
                      ? "bg-muted/30 text-muted-foreground/40 cursor-not-allowed"
                      : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                  data-testid={`quiz-count-${n}`}
                >
                  {n}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {availableQuestions.length} questions available with current filters
            </p>
          </div>

          <Button 
            onClick={startQuiz} 
            disabled={availableQuestions.length === 0}
            className="w-full py-6 text-lg gap-2"
            data-testid="button-start-quiz"
          >
            <Zap className="w-5 h-5" />
            Start Quiz
          </Button>
        </div>
      </div>
    );
  }

  if (state === "playing" && quizQuestionSet.length > 0) {
    const current = quizQuestionSet[currentIndex];
    const progress = ((currentIndex) / quizQuestionSet.length) * 100;

    return (
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">
              Question {currentIndex + 1} of {quizQuestionSet.length}
            </span>
            <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${getDifficultyColor(current.difficulty)}`}>
              {current.difficulty}
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">{current.category}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Target className="w-4 h-4 text-primary" />
            <span className="font-medium">{score}/{totalAnswered}</span>
          </div>
        </div>

        <div className="w-full bg-muted rounded-full h-2 mb-6">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
            data-testid="quiz-progress-bar"
          />
        </div>

        <div className="bg-card/60 border border-border rounded-xl p-6">
          <h4 className="text-lg font-medium mb-6 leading-relaxed" data-testid="text-quiz-question">
            {current.question}
          </h4>

          <div className="space-y-3">
            {current.options.map((option, index) => {
              let optionClass = "bg-background hover:bg-muted border-border hover:border-primary/30 cursor-pointer";
              
              if (selectedAnswer !== null) {
                if (index === current.correctIndex) {
                  optionClass = "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-700";
                } else if (index === selectedAnswer && index !== current.correctIndex) {
                  optionClass = "bg-red-50 dark:bg-red-950/30 border-red-300 dark:border-red-700";
                } else {
                  optionClass = "bg-muted/30 border-border/50 opacity-60";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${optionClass}`}
                  data-testid={`quiz-option-${index}`}
                >
                  <span className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-grow text-sm">{option}</span>
                  {selectedAnswer !== null && index === current.correctIndex && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  )}
                  {selectedAnswer !== null && index === selectedAnswer && index !== current.correctIndex && (
                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className={`mt-6 p-4 rounded-xl border ${
              selectedAnswer === current.correctIndex 
                ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800" 
                : "bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800"
            }`}
              data-testid="quiz-explanation"
            >
              <div className="flex items-center gap-2 mb-2">
                {selectedAnswer === current.correctIndex ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                )}
                <span className="font-medium text-sm">
                  {selectedAnswer === current.correctIndex ? "Correct!" : "Not quite right"}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{current.explanation}</p>
            </div>
          )}

          {selectedAnswer !== null && (
            <div className="mt-6 flex justify-end">
              <Button onClick={nextQuestion} className="gap-2" data-testid="button-next-question">
                {currentIndex + 1 >= quizQuestionSet.length ? "See Results" : "Next Question"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>

        <div className="mt-4 flex justify-center">
          <button
            onClick={resetQuiz}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            data-testid="button-quit-quiz"
          >
            <RotateCcw className="w-3 h-3" /> Quit & Start Over
          </button>
        </div>
      </div>
    );
  }

  if (state === "complete") {
    const msg = getScoreMessage(score, quizQuestionSet.length);
    const pct = Math.round((score / quizQuestionSet.length) * 100);

    if (!highScore || score > highScore.score || (score === highScore.score && quizQuestionSet.length > highScore.total)) {
      localStorage.setItem("quiz_high_score", JSON.stringify({ score, total: quizQuestionSet.length }));
    }

    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-card/60 border border-border rounded-xl p-8 text-center">
          <div className="text-6xl mb-4">{msg.icon}</div>
          <h3 className="text-2xl font-serif font-medium mb-2" data-testid="text-quiz-result">
            {score} out of {quizQuestionSet.length}
          </h3>
          <p className="text-muted-foreground mb-2">{msg.text}</p>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="text-3xl font-bold text-primary">{pct}%</div>
          </div>

          <div className="w-full bg-muted rounded-full h-3 mb-8 max-w-sm mx-auto">
            <div
              className={`h-3 rounded-full transition-all duration-1000 ${
                pct >= 80 ? "bg-emerald-500" : pct >= 60 ? "bg-amber-500" : "bg-red-500"
              }`}
              style={{ width: `${pct}%` }}
            />
          </div>

          <div className="space-y-3 mb-8 text-left max-w-lg mx-auto">
            <h4 className="font-medium text-sm text-center mb-4">Review Your Answers</h4>
            {quizQuestionSet.map((q, i) => {
              const answer = answers[i];
              return (
                <div
                  key={q.id}
                  className={`p-3 rounded-lg border text-sm flex items-start gap-3 ${
                    answer?.correct
                      ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800"
                      : "bg-red-50/50 dark:bg-red-950/20 border-red-200 dark:border-red-800"
                  }`}
                  data-testid={`quiz-review-${i}`}
                >
                  {answer?.correct ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-grow min-w-0">
                    <p className="font-medium line-clamp-1">{q.question}</p>
                    {!answer?.correct && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Correct answer: {q.options[q.correctIndex]}
                      </p>
                    )}
                  </div>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded flex-shrink-0 ${getDifficultyColor(q.difficulty)}`}>
                    {q.difficulty}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={startQuiz} className="gap-2" data-testid="button-retry-quiz">
              <RotateCcw className="w-4 h-4" />
              Try Again
            </Button>
            <Button variant="outline" onClick={resetQuiz} className="gap-2" data-testid="button-new-quiz">
              <Zap className="w-4 h-4" />
              New Quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
