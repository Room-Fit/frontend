import { TextDisplay } from "@/entities/profile/ui/TextDisplay/TextDisplay";
import { QuestionReply } from "@/features/profile/service/readSurveyReplyById";
import { Label } from "@/shared/ui";

export const DoubleSliderDisplay = ({
    title,
    options,
    optionDelimiter,
}: Omit<QuestionReply, "type">) => {
    return (
        <div>
            <Label>{title}</Label>
            <TextDisplay>
                {options.map((option) => option.value + optionDelimiter).join(" ~ ")}
            </TextDisplay>
        </div>
    );
};
