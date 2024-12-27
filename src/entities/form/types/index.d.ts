export interface Option {
    label?: string;
    value: string;
}

export interface Question {
    questionId: number;
    questionText: string;
    questionType: keyof typeof QuestionTypes;
    dataType: string;
    options: Option[];
}

/**
 * 서버로 부터 받은 Form 생성 스키마 (Form 생성 및 응답 구조를 위한 데이터)
 * - FormContextProviderProps 에 제공되어 제출된 응답 상태에 대한 구조를 정의
 * - FormFactory 에 제공되어 해당 스키마에 맞는 Form 컴포넌트에 필요한 데이터를 제공
 */
export interface FormSchema {
    _id: string;
    title: string;
    description: string;
    questions: Question[];
}

export interface ButtonProps extends React.ComponentProps<"button"> {
    children: React.ReactNode;
}
