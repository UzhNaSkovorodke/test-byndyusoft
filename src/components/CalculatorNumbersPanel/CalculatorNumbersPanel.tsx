import * as React from 'react';
import {useState} from 'react';

import './calculatorNumbersPanel.scss';

interface ICalculatorNumbersPanelProps {}
interface INumbersList {
  type: string;
  value: string | number;
  id: number;
}

const CalculatorNumbersPanel: React.FunctionComponent<ICalculatorNumbersPanelProps> = props => {
  const [btnList, setBtnList] = useState<INumbersList[]>([
    {id: 1, type: 'operation', value: 'C'},
    {id: 2, type: 'operation', value: 'V'},
    {id: 3, type: 'operation', value: '%'},
    {id: 4, type: 'operation', value: '/'},
    {id: 5, type: 'number', value: '7'},
    {id: 6, type: 'number', value: '8'},
    {id: 7, type: 'number', value: '9'},
    {id: 8, type: 'operation', value: 'x'},
    {id: 9, type: 'number', value: '4'},
    {id: 10, type: 'number', value: '5'},
    {id: 11, type: 'number', value: '6'},
    {id: 12, type: 'operation', value: '-'},
    {id: 13, type: 'number', value: '1'},
    {id: 14, type: 'number', value: '2'},
    {id: 15, type: 'number', value: '3'},
    {id: 16, type: 'operation', value: '+'},
    {id: 17, type: 'operation', value: '00'},
    {id: 18, type: 'number', value: '0'},
    {id: 19, type: 'number', value: ','},
    {id: 20, type: 'operation', value: '='}
  ]);

  return (
    <div className="numbersPanelWrapper">
      {btnList.map(element => (
        <div key={element.id} className="number">
          {element.value}
        </div>
      ))}
    </div>
  );
};

export default CalculatorNumbersPanel;
