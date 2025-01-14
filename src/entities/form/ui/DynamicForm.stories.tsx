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
    id: 1,
    title: "경북대학교 2025년 룸핏 모집공고",
    description: "경북대학교 2025년 룸핏 모집공고",
    questions: [
        {
            id: 1,
            title: "기상시간",
            type: "doubleSlider",
            optionDelimiter: "시",
            options: [
                { label: "min", value: "4" },
                { label: "max", value: "12" },
            ],
        },
        {
            id: 2,
            title: "취침시간",
            type: "doubleSlider",
            optionDelimiter: "시",
            options: [
                { label: "min", value: "21" },
                { label: "max", value: "27" },
            ],
        },
        {
            id: 3,
            title: "잠귀",
            type: "slider",
            optionDelimiter: null,
            options: [
                { label: "어두움", value: "1" },
                { label: "밝음", value: "5" },
            ],
        },
        {
            id: 4,
            title: "취침등",
            type: "selector",
            optionDelimiter: null,
            options: [
                { label: "없음", value: "없음" },
                { label: "수면등", value: "수면등" },
                { label: "스탠드", value: "스탠드" },
            ],
        },
        {
            id: 5,
            title: "알람 설정",
            type: "selector",
            optionDelimiter: null,
            options: [
                { label: "없음", value: "없음" },
                { label: "10분마다", value: "10분마다" },
                { label: "한번만", value: "한번만" },
            ],
        },
        {
            id: 6,
            title: "잠버릇",
            type: "checkbox",
            optionDelimiter: null,
            options: [
                { label: "이갈이", value: "이갈이" },
                { label: "코골이", value: "코골이" },
                { label: "잠꼬대", value: "잠꼬대" },
                { label: "몸부림", value: "몸부림" },
            ],
        },
        {
            id: 7,
            title: "더위",
            type: "slider",
            optionDelimiter: null,
            options: [
                { label: "적게탐", value: "1" },
                { label: "많이탐", value: "5" },
            ],
        },
        {
            id: 8,
            title: "추위",
            type: "slider",
            optionDelimiter: null,
            options: [
                { label: "적게탐", value: "1" },
                { label: "많이탐", value: "5" },
            ],
        },
        {
            id: 9,
            title: "청소주기",
            type: "selector",
            optionDelimiter: null,
            options: [
                { label: "주1회", value: "주1회" },
                { label: "주3~4회", value: "주3~4회" },
                { label: "매일", value: "매일" },
            ],
        },
        {
            id: 10,
            title: "룸메이트와 관계",
            type: "slider",
            optionDelimiter: null,
            options: [
                { label: "학교사람", value: "1" },
                { label: "절친", value: "5" },
            ],
        },
        {
            id: 11,
            title: "룸메이트와 물건공유",
            type: "selector",
            optionDelimiter: null,
            options: [
                { label: "없음", value: "없음" },
                { label: "가능", value: "가능" },
                { label: "협의", value: "협의" },
            ],
        },
        {
            id: 12,
            title: "친구초대",
            type: "selector",
            optionDelimiter: null,
            options: [
                { label: "불가", value: "불가" },
                { label: "가끔", value: "가끔" },
                { label: "자주", value: "자주" },
            ],
        },
        {
            id: 13,
            title: "운동빈도",
            type: "selector",
            optionDelimiter: null,
            options: [
                { label: "안함", value: "안함" },
                { label: "가끔함", value: "가끔함" },
                { label: "매일함", value: "매일함" },
            ],
        },
        {
            id: 14,
            title: "운동시간대",
            type: "selector",
            optionDelimiter: null,
            options: [
                { label: "없음", value: "없음" },
                { label: "아침", value: "아침" },
                { label: "점심", value: "점심" },
                { label: "저녁", value: "저녁" },
            ],
        },
        {
            id: 15,
            title: "본가방문 주기",
            type: "selector",
            optionDelimiter: null,
            options: [
                { label: "없음", value: "없음" },
                { label: "수면등", value: "수면등" },
                { label: "스탠드", value: "스탠드" },
            ],
        },
        {
            id: 16,
            title: "공부장소",
            type: "selector",
            optionDelimiter: null,
            options: [
                { label: "없음", value: "없음" },
                { label: "수면등", value: "수면등" },
                { label: "스탠드", value: "스탠드" },
            ],
        },
        {
            id: 17,
            title: "운동빈도",
            type: "selector",
            optionDelimiter: null,
            options: [
                { label: "안함", value: "안함" },
                { label: "가끔함", value: "가끔함" },
                { label: "매일함", value: "매일함" },
            ],
        },
        {
            id: 18,
            title: "운동시간대",
            type: "selector",
            optionDelimiter: null,
            options: [
                { label: "아침", value: "아침" },
                { label: "점심", value: "점심" },
                { label: "저녁", value: "저녁" },
            ],
        },
        {
            id: 19,
            title: "게임",
            type: "selector",
            optionDelimiter: null,
            options: [
                { label: "안함", value: "안함" },
                { label: "가끔", value: "가끔" },
                { label: "매일", value: "매일" },
            ],
        },
        {
            id: 20,
            title: "흡연",
            type: "selector",
            optionDelimiter: null,
            options: [
                { label: "안함", value: "없음" },
                { label: "전자담배", value: "전자담배" },
                { label: "연초", value: "연초" },
                { label: "둘다", value: "둘다" },
            ],
        },
        {
            id: 21,
            title: "실내통화",
            type: "selector",
            optionDelimiter: null,
            options: [
                { label: "안함", value: "안함" },
                { label: "짧은통화", value: "짧은통화" },
                { label: "자주함", value: "자주함" },
            ],
        },
        {
            id: 22,
            title: "음주빈도",
            type: "slider",
            optionDelimiter: null,
            options: [
                { label: "자주안마심", value: "1" },
                { label: "자주마심", value: "5" },
            ],
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
