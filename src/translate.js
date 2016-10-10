export const translateFunction = (key) => {
  let translations = {
    "pagination.previous": "Назад",
    "pagination.next": "Далі",
    "NoHits.NoResultsFound": "Нічого не знайдено",
    "searchbox.placeholder": "Пошук",
    "hitstats.results_found": "Знайдено {hitCount} результатів ({timeTaken} мс)",
    "reset.clear_all": "Скинути усі фільтри"
  };
  return translations[key];
};

export default translateFunction;
