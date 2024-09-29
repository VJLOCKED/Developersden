import ChapterWithChallenge from "@/pages/ChaptersComponents/ChapterWithChallenge"

const Chapter2 = () => {
  const initialInput = 'let num = 5;\nlet num=1;\nconsole.log(num);'

  return (
    <ChapterWithChallenge
      heading="Reassign a value to a variable"
      question="Assign a new value to the variable num. The code will not work the way it is. Find the mistake and fix it. Execute the corrected code."
      initialInput={initialInput}
      editableLines={[false, true, false]} // Making only the second line editable
      nextLink={'/javascript-basics/variables'}    />
  );
};

export default Chapter2;
