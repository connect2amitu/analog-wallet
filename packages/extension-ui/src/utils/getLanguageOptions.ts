interface Option {
  text: React.ReactNode;
  value: string | number;
}

const getLanguageOptions = (): Option[] => [
  {
    text: 'English',
    value: 'en'
  },
  {
    text: 'Gujarati',
    value: 'gu'
  },
  {
    text: 'Hindi',
    value: 'hi'
  }
]

export default getLanguageOptions 