interface Option {
  text: React.ReactNode;
  value: string | number;
}

export const LANGUAGES: Option[] = [
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