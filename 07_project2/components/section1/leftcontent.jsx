import {Arrowupright} from './arrow';
import Herotext from './herotext';

const Leftcontent = () => {
  return (
    <div className="flex flex-col justify-between h-full w-1/3">
      <Herotext />
      <Arrowupright />
    </div>
  )
}

export default Leftcontent
