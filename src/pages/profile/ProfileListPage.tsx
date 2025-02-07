import { toast } from "react-toastify";

import { BaseScreen } from "@/apps/Screen";
import { NavTop } from "@/apps/layouts/NavTop";
import { useFlow } from "@/apps/stackflow";

import { ProfileCard } from "@/entities/profile/ui/ProfileCard/ProfileCard";
import { useReadUserList } from "@/features/profile/service/readUserList";

export default function ProfileListPage() {
    const { data } = useReadUserList();
    const { push } = useFlow();

    if (!data) return null;

    const parseStudentId = (studentId: string) => {
        return studentId.toString().substring(2, 4);
    };

    const pushProfileDetailPage = (id: number) => {
        const user = data.find((user) => user.id === id);

        if (!user) {
            toast.error("사용자 정보를 불러올 수 없습니다.");
            return null;
        }

        if (!user.surveyComplete) {
            toast.error("아직 프로필을 등록하지 않은 사용자입니다.");
            return null;
        }

        push("ProfileDetailPage", { id });
    };

    return (
        <BaseScreen>
            <NavTop />
            <div className="flex flex-col gap-4 p-4 ">
                {data.map((user) => (
                    <ProfileCard
                        gender={user.gender}
                        nickname={user.nickname}
                        onClick={() => pushProfileDetailPage(user.id)}
                    >
                        <div className="flex flex-col font-bold">
                            <p className="text-xs">{parseStudentId(user.studentId)}학번</p>
                            <p className="text-xs">{user.birth}년생</p>
                            <p className="text-xs">{user.college}</p>
                        </div>
                    </ProfileCard>
                ))}
            </div>
        </BaseScreen>
    );
}
