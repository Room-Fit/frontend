import { FormSchema } from "@/entities/form/types";
import { DynamicForm } from "@/entities/form/ui/DynamicForm";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DynamicForm> = {
    title: "Entity/Form/DynamicForm",
    component: DynamicForm,
};

export default meta;
type Story = StoryObj<typeof DynamicForm>;

const formSchema: FormSchema = {
    _id: "_id",
    title: "경북대학교 2025년 룸핏 모집공고",
    description: "경북대학교 2025년 룸핏 모집공고",
    questions: [
        {
            questionId: 1,
            questionText: "기상시간",
            questionType: "doubleSlider",
            options: [
                { label: "min", value: "4" },
                { label: "max", value: "12" },
                { label: "unit", value: "시" },
            ],
            dataType: "string",
        },
        {
            questionId: 2,
            questionText: "취침시간",
            questionType: "doubleSlider",
            options: [
                { label: "min", value: "21" },
                { label: "max", value: "27" },
                { label: "unit", value: "시" },
            ],
            dataType: "string",
        },
        {
            questionId: 3,
            questionText: "잠귀",
            questionType: "slider",
            options: [
                { label: "어두움", value: "1" },
                { label: "밝음", value: "5" },
            ],
            dataType: "string",
        },
        {
            questionId: 4,
            questionText: "취침등",
            questionType: "selector",
            options: [
                { label: "없음", value: "없음" },
                { label: "수면등", value: "수면등" },
                { label: "스탠드", value: "스탠드" },
            ],
            dataType: "string",
        },
        {
            questionId: 5,
            questionText: "알람 설정",
            questionType: "selector",
            options: [
                { label: "없음", value: "없음" },
                { label: "10분마다", value: "10분마다" },
                { label: "한번만", value: "한번만" },
            ],
            dataType: "string",
        },
        {
            questionId: 6,
            questionText: "잠버릇",
            questionType: "checkbox",
            options: [
                { label: "이갈이", value: "이갈이" },
                { label: "코골이", value: "코골이" },
                { label: "잠꼬대", value: "잠꼬대" },
                { label: "몸부림", value: "몸부림" },
            ],
            dataType: "string",
        },
        {
            questionId: 7,
            questionText: "더위",
            questionType: "slider",
            options: [
                { label: "적게탐", value: "1" },
                { label: "많이탐", value: "5" },
            ],
            dataType: "string",
        },
        {
            questionId: 8,
            questionText: "추위",
            questionType: "slider",
            options: [
                { label: "적게탐", value: "1" },
                { label: "많이탐", value: "5" },
            ],
            dataType: "string",
        },
        {
            questionId: 9,
            questionText: "청소주기",
            questionType: "selector",
            options: [
                { label: "주1회", value: "주1회" },
                { label: "주3~4회", value: "주3~4회" },
                { label: "매일", value: "매일" },
            ],
            dataType: "string",
        },
        {
            questionId: 10,
            questionText: "취침등",
            questionType: "selector",
            options: [
                { label: "없음", value: "없음" },
                { label: "수면등", value: "수면등" },
                { label: "스탠드", value: "스탠드" },
            ],
            dataType: "string",
        },
        {
            questionId: 11,
            questionText: "취침등",
            questionType: "selector",
            options: [
                { label: "없음", value: "없음" },
                { label: "수면등", value: "수면등" },
                { label: "스탠드", value: "스탠드" },
            ],
            dataType: "string",
        },
        {
            questionId: 12,
            questionText: "룸메이트와 관계",
            questionType: "slider",
            options: [
                { label: "학교사람", value: "1" },
                { label: "절친", value: "5" },
            ],
            dataType: "string",
        },
        {
            questionId: 13,
            questionText: "룸메이트와 물건공유",
            questionType: "selector",
            options: [
                { label: "없음", value: "없음" },
                { label: "수면등", value: "수면등" },
                { label: "스탠드", value: "스탠드" },
            ],
            dataType: "string",
        },
        {
            questionId: 14,
            questionText: "친구초대",
            questionType: "selector",
            options: [
                { label: "없음", value: "없음" },
                { label: "수면등", value: "수면등" },
                { label: "스탠드", value: "스탠드" },
            ],
            dataType: "string",
        },
        {
            questionId: 15,
            questionText: "본가방문 주기",
            questionType: "selector",
            options: [
                { label: "없음", value: "없음" },
                { label: "수면등", value: "수면등" },
                { label: "스탠드", value: "스탠드" },
            ],
            dataType: "string",
        },
        {
            questionId: 16,
            questionText: "공부장소",
            questionType: "selector",
            options: [
                { label: "없음", value: "없음" },
                { label: "수면등", value: "수면등" },
                { label: "스탠드", value: "스탠드" },
            ],
            dataType: "string",
        },
        {
            questionId: 17,
            questionText: "운동빈도",
            questionType: "selector",
            options: [
                { label: "안함", value: "안함" },
                { label: "가끔함", value: "가끔함" },
                { label: "매일함", value: "매일함" },
            ],
            dataType: "string",
        },
        {
            questionId: 18,
            questionText: "운동시간대",
            questionType: "selector",
            options: [
                { label: "아침", value: "아침" },
                { label: "점심", value: "점심" },
                { label: "저녁", value: "저녁" },
            ],
            dataType: "string",
        },
        {
            questionId: 19,
            questionText: "게임",
            questionType: "selector",
            options: [
                { label: "안함", value: "안함" },
                { label: "가끔", value: "가끔" },
                { label: "매일", value: "매일" },
            ],
            dataType: "string",
        },
        {
            questionId: 20,
            questionText: "흡연",
            questionType: "selector",
            options: [
                { label: "안함", value: "없음" },
                { label: "전자담배", value: "전자담배" },
                { label: "연초", value: "연초" },
                { label: "둘다", value: "둘다" },
            ],
            dataType: "string",
        },
        {
            questionId: 21,
            questionText: "실내통화",
            questionType: "selector",
            options: [
                { label: "안함", value: "안함" },
                { label: "짧은통화", value: "짧은통화" },
                { label: "자주함", value: "자주함" },
            ],
            dataType: "string",
        },
        {
            questionId: 22,
            questionText: "음주빈도",
            questionType: "slider",
            options: [
                { label: "자주안마심", value: "1" },
                { label: "자주마심", value: "5" },
            ],
            dataType: "string",
        },
    ],
};

export const Default: Story = {
    args: {
        formSchema,
    },
    render: ({ formSchema }) => {
        return <DynamicForm formSchema={formSchema} />;
    },
};
