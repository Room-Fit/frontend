/**
 * @example
 * 
 * {
    "id": 1,
    "title": "설문지ver1",
    "description": "설문지 설명",
    "questions": [
        {
            "id": 1,
            "title": "질문 제목",
            "type": "doubleSlider",
            "optionDelimiter": "시",
            "options": [
                { "label": "min", "value": "4" },
                { "label": "max", "value": "12" }
            ]
        },
        {
            "id": 2,
            "title": "잠귀",
            "type": "slider",
            "optionDelimiter": null,
            "options": [
                { "label": "어두움", "value": "1" },
                { "label": "밝음", "value": "5" }
            ]
        }
    ]
}
 */

export interface Option {
    label?: string;
    value: string;
}

export interface Question {
    id: number;
    title: string;
    type: keyof typeof QuestionTypes;
    optionDelimiter: string | null;
    options: Option[];
}

/**
 * 서버로 부터 받은 Form 생성 스키마 (Form 생성 및 응답 구조를 위한 데이터)
 * - FormContextProviderProps 에 제공되어 제출된 응답 상태에 대한 구조를 정의
 * - FormFactory 에 제공되어 해당 스키마에 맞는 Form 컴포넌트에 필요한 데이터를 제공
 */
export interface FormSchema {
    id: number;
    title: string;
    description: string;
    questions: Question[];
}
