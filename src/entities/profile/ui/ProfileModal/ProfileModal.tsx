import { Modal } from "@/shared/components";
import { Button } from "@/shared/ui";

export const ProfileModal = () => {
    return (
        <Modal.Root>
            <Modal.Content className="w-full m-8">
                <h1 className="text-lg font-semibold text-primary">
                    아직 프로필을 등록하지 않으셨네요
                </h1>
                <div className="my-2">
                    <p>프로필을 등록하면 룸핏의 모든 서비스를 이용할 수 있어요!</p>
                </div>

                <Button variant="default" className="w-full">
                    프로필 등록하기
                </Button>
            </Modal.Content>
        </Modal.Root>
    );
};
