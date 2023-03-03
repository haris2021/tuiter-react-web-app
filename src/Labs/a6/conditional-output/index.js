import ConditionalOutputIfElse from "./conditional-output-if-else.js";
import ConditionalOutputInline from "./conditional-output-inline.js";



const ConditionalOutput = () =>
{
    return(
        <div>
                <ConditionalOutputIfElse/>
                <ConditionalOutputInline/>
        </div>
    );
}

export default ConditionalOutput;