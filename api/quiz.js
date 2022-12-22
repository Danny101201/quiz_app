// get test question
export const getQuestionsAPI = () => {
  return fetch('https://opentdb.com/api.php?amount=10&encode=url3986').then(res => res.json());
}