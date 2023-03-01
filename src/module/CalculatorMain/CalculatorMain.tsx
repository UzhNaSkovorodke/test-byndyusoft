import * as React from 'react';

import CalculatorCounter from '../../components/CalculatorCounter/CalculatorCounter';
import CalculatorHistoryPanel from '../../components/CalculatorHistoryPanel/CalculatorHistoryPanel';
import CalculatorNumbersPanel from '../../components/CalculatorNumbersPanel/CalculatorNumbersPanel';

import './calculatorMain.scss';

interface ICalculatorMainProps {}

const CalculatorMain: React.FunctionComponent<ICalculatorMainProps> = props => {
  return (
    <div className="calculatorWrapper">
      <div className="calculator__main">
        <CalculatorHistoryPanel />
        <CalculatorCounter />
        <CalculatorNumbersPanel />
      </div>
    </div>
  );
};

export default CalculatorMain;
