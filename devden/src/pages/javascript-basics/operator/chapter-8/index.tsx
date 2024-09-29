import ChapterWithChallenge from "@/pages/ChaptersComponents/ChapterWithChallenge"

const Chapter8 = () => {
  const initialInput = 'const numOne = 1;\nconst numTwo = 4;\nconst numThree = 2;\nconsole.log(numOne <= numTwo, numTwo <= numThree);'

  return (
    <ChapterWithChallenge
      heading="Comparision operators - Less than or equal"
      question="In the console.log() statement below we use the Less Than Or Equal operator to check whether the value of numOne is less than or equal the value of numTwo. It also checks whether the value of numTwo is less than or equal the value of numThree. Change the code so that both expressions in the console.log() statement logs true."
      initialInput={initialInput}
      editableLines={[true,true,true,false]} 
      nextLink="/javascript-basics/operator" // Making only the second line editable
    />
  );
};

export default Chapter8;
