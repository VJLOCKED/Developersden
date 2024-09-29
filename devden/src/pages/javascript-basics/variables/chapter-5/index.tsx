import ChapterWithChallenge from "@/pages/ChaptersComponents/ChapterWithChallenge"

const Chapter2 = () => {
  const initialInput = ' \nlet numTwo = numOne;\nconsole.log(numTwo);'

  return (
    <ChapterWithChallenge
      heading="Create the missing variable"
      question="Below, we attempt to assign the value of a variable named numOne to the variable numTwo. But, that variable has not been declared yet. Declare a variable named numOne and run the code."
      initialInput={initialInput}
      editableLines={[true,false,false]} // Making only the second line editable
    />
  );
};

export default Chapter2;
