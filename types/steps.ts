// types/steps.ts

export interface StepProps {
  next?: () => void;
  prev?: () => void;
  formData: {
    name: string;
    bio: string;
    profileImage: string;
    memberCount: number;
    size: string;
    mission: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      bio: string;
      profileImage: string;
      memberCount: number;
      size: string;
      mission: string;
    }>
  >;
}
