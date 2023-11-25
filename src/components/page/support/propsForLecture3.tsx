/** @format */

interface IData {
  name?: string;
  age?: number;
  color?: string;
}

interface IOperation {
  isopen: boolean;
}

export const PropsTag: React.FC<IData> = (props) => {
  return (
    <>
      <h2>My name is {props.name}!</h2>
      <p style={{ color: props.color }}>I'm {props.age} years old.</p>
    </>
  );
};

export const IfPropsTag: React.FC<IOperation> = (props) => {
  const isOpen = props.isopen as boolean;

  if (isOpen) {
    return (
      <>
        <h2>This is securie tag.</h2>
        <p style={{ color: "blue" }}>Today is a good day.</p>
      </>
    );
  } else {
    return (
      <>
        <h2>Nothing here.</h2>
      </>
    );
  }
};
