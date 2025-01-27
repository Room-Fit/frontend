import { BaseScreen } from "@/apps/Screen";
import { NavTop } from "@/apps/layouts/NavTop";
import { RecruitmentStatus } from "@/apps/types/status";

import { ProfileCard } from "@/entities/profile/ui/ProfileCard/ProfileCard";

export default function ProfileListPage() {
    return (
        <BaseScreen>
            <NavTop />
            <div className="flex flex-col gap-4 p-4">
                <ProfileCard status={RecruitmentStatus.RECRUITING} nickname={"김대건"}>
                    <div className="flex flex-col">
                        <p className="text-xs">20 학번</p>
                        <p className="text-xs">2000년생</p>
                        <p className="text-xs">ESTP</p>
                    </div>
                </ProfileCard>

                <ProfileCard status={RecruitmentStatus.MATCH_COMPLETE} nickname={"김대건"}>
                    <div className="flex flex-col">
                        <p className="text-xs">20 학번</p>
                        <p className="text-xs">2000년생</p>
                        <p className="text-xs">ESTP</p>
                    </div>
                </ProfileCard>
            </div>
        </BaseScreen>
    );
}
