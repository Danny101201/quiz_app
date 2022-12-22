import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import Loading from '../component/loading';
import React, { useEffect, useState } from 'react'
import { getQuestionsAPI } from '../api/quiz'

const shuffleArray = (array) => {
  return array.sort((a, b) => Math.random() - 0.5)
}
const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState([])
  const [options, setOptions] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [score, setScore] = useState(0)
  const [ques, setQues] = useState(0)
  const getQuestions = async () => {
    setLoading(true)
    const generatorQuestions = await getQuestionsAPI();
    setQuestions(generatorQuestions.results)
    generatorOptionsAndShuffle(generatorQuestions.results[ques])
    setLoading(false)
  }
  const generatorOptionsAndShuffle = (question) => {
    const options = [...question.incorrect_answers]
    options.push(question.correct_answer)
    shuffleArray(options)
    setOptions(options)
  }
  const NextQuestion = () => {
    if (ques === questions.length - 1) {
      setDisabled(true)
      return
    }
    setQues(ques + 1)
    generatorOptionsAndShuffle(questions[ques + 1])
  }
  const handleSelectOptions = (option) => {
    if (option === questions[ques].correct_answer) {
      setScore(score + 10)
    }
    NextQuestion()
  }
  useEffect(() => {
    getQuestions()
  }, [])
  return (
    <>
      {loading && <Loading />}
      <View style={styles.container}>
        {questions.length !== 0 && (
          <View style={{ flex: 1 }}>
            <View style={styles.top}>
              <Text style={styles.text} numberOfLines={2} > Q{ques + 1}. {decodeURIComponent(questions[ques].question)}</Text>
            </View>
            <View style={styles.options}>
              {options.map((option, index) => (
                <TouchableOpacity disabled={disabled} style={styles.option} key={index} onPress={() => handleSelectOptions(option)}>
                  <Text style={{ color: 'white', fontSize: 30 }}>{decodeURIComponent(option)}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.bottom}>
              {(ques === questions.length - 1 && disabled) ? (
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Result', { score })}>
                  <Text style={styles.btnText}>show result {score}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.btn} onPress={NextQuestion}>
                  <Text style={styles.btnText}>skip</Text>
                </TouchableOpacity>
              )}

            </View>
          </View>
        )}
      </View>
    </>
  )
}

export default Quiz

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 25,
    maxWidth: '100%',
  },
  options: {
    marginTop: 40,
    marginVertical: 16,
    flex: 1,
  },
  option: {
    backgroundColor: '#59C1BD',
    color: 'white',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  bottom: {
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: '#1A759F',
    borderRadius: 10
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10
  }
});


