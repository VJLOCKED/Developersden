import ChapterWithChallenge from "@/pages/ChaptersComponents/ChapterWithChallenge"

const Chapter2 = () => {
  const initialInput = 'let num\n \nconsole.log(num);'

  return (
    <ChapterWithChallenge
      heading="Assign a value to a variable"
      question="Here, we declare the variable num. But, it has no value yet. Assign a value to it and run the code."
      initialInput={initialInput}
      editableLines={[false,true,false]} // Making only the second line editable
    />
  );
};

export default Chapter2;
