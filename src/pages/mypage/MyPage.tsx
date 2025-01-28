import { toast } from "react-toastify";

import {
    Bug,
    FileQuestion,
    Info,
    KeyRound,
    LogOut,
    Scroll,
    UserRoundPen,
    UserX,
} from "lucide-react";

import { BaseScreen } from "@/apps/Screen";
import { NavTop } from "@/apps/layouts/NavTop";
import { useFlow } from "@/apps/stackflow";

import { AuthActionType, useAuth } from "@/features/auth/store/useAuth";
import { Menu } from "@/features/mypage/ui/Menu";
import { MenuItem } from "@/features/mypage/ui/MenuItem";
import { ProfileHeader } from "@/features/mypage/ui/ProfileHeader";

export default function MyPage() {
    const { push } = useFlow();
    const { dispatch } = useAuth();

    return (
        <BaseScreen>
            <NavTop />

            <section className="p-4">
                <ProfileHeader nickname={"toothlessKid"} email={"toothless@knu.ac.kr"} />

                <Menu label="내 정보 관리">
                    <MenuItem label="비밀번호 변경하기" icon={<KeyRound size={20} />} />
                    <MenuItem
                        label="프로필 수정하기"
                        icon={<UserRoundPen size={20} />}
                        onClick={() => push("ProfileEditPage", {})}
                    />
                    <MenuItem
                        label="로그아웃"
                        icon={<LogOut size={20} />}
                        onClick={() => {
                            dispatch({ type: AuthActionType.SIGN_OUT });
                            toast.success("로그아웃 되었습니다.");
                            push("HomePage", {});
                        }}
                    />
                </Menu>

                <Menu label="고객센터">
                    <MenuItem label="문의하기" icon={<FileQuestion size={20} />} />
                    <MenuItem label="건의사항" icon={<UserRoundPen size={20} />} />
                    <MenuItem label="버그신고" icon={<Bug size={20} />} />
                </Menu>

                <Menu label="기타">
                    <MenuItem label="개인정보 처리방침" icon={<Info size={20} />} />
                    <MenuItem label="서비스 이용약관" icon={<Scroll size={20} />} />
                    <MenuItem label="탈퇴하기" icon={<UserX size={20} />} />
                </Menu>
            </section>
        </BaseScreen>
    );
}
