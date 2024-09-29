import ChapterWithChallenge from "@/pages/ChaptersComponents/ChapterWithChallenge"

const Chapter2 = () => {
  const initialInput = 'let numOne = 5;\n//Assign the value of another variable\n\nconsole.log(numTwo);'

  return (
    <ChapterWithChallenge
      heading="Assign the value of another variable"
      question="Here, we have two variables numOne and numTwo. numOne already has a value. Assign numTwo the value of numOne and run the code."
      initialInput={initialInput}
      editableLines={[false,false,true,false]} // Making only the second line editable
      nextLink={'/javascript-basics/variables'} 
    />
  );
};

export default Chapter2;
