import { TextDisplay } from "@/entities/profile/ui/TextDisplay/TextDisplay";
import { QuestionReply } from "@/features/profile/service/readSurveyReplyById";
import { Label } from "@/shared/ui";

export const SelectorDisplay = ({ title, options }: Omit<QuestionReply, "type">) => {
    return (
        <div>
            <Label>{title}</Label>
            <TextDisplay>{options[0].label}</TextDisplay>
        </div>
    );
};
