// types/UserInfo.type.ts
export interface UserSetting {
  name: string;
  label: string;
  type: string | null;
  value: any;
  min?: number | null;
  max?: number | null;
  items?: { id: string; label: string }[] | null;
}

export interface UserInfoTypes {
  uid: string;
  first_name: string;
  last_name: string;
  email: string;
  birthday: string;
  phone: number;
  national_id: string;
  nationality: string;
  gender: string;
  address: string;
  google_auth_enabled: boolean;
  has_password: boolean;
  referred: boolean;
  transaction_fee: number;
  total_volume: number;
  margin_total_volume: number;
  user_level: string;
  settings: UserSetting[];
  // verified fields
  email_verified: string;
  phone_verified: string;
  identity_card_verified: string;
  landline_phone_verified: string;
  bank_verified: string;
  address_verified: string;
  identity_verified: string;
  foreigner_identification: string | null;
}

export interface UserState {
  userInfo: UserInfoTypes | null;
  loading: boolean;
  error: string | null;
}
