import { Feedback } from './Feedback';

export const App = () => {
  return (
    <div>
      <Feedback initialValue={0} step={1} initialValuePercentage={100} />
    </div>
  );
};
