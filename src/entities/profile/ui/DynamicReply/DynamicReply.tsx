import { CheckBoxDisplay } from "@/entities/profile/ui/CheckBoxDisplay/CheckBoxDisplay";
import { DoubleSliderDisplay } from "@/entities/profile/ui/DoubleSliderDisplay/DoubleSliderDisplay";
import { SelectorDisplay } from "@/entities/profile/ui/SelectorDisplay/SelectorDisplay";
import { QuestionReply } from "@/features/profile/service/readSurveyReplyById";

// import { SliderDisplay } from "@/entities/profile/ui/SliderDisplay/SliderDisplay";

export interface DynamicReplyProps {
    questions: Array<QuestionReply>;
}

export const replyElementMap = {
    SELECTOR: SelectorDisplay,
    CHECKBOX: CheckBoxDisplay,
    DOUBLE_SLIDER: DoubleSliderDisplay,
    // SLIDER: SliderDisplay,
};

export const DynamicReply = ({ questions }: DynamicReplyProps) => {
    questions.map((reply) => {
        const Component = replyElementMap[reply.type];
        return <Component {...reply} />;
    });

    return <div>asdf</div>;
};
