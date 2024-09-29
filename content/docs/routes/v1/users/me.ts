/*
type RelationShip struct {
	From     string `json:"from" bson:"from"`
	To       string `json:"to" bson:"to"`
	Nickname string `json:"nickname" bson:"nickname"`
	Type     int    `json:"type" bson:"type"` // 0 = friend, 1 = blocked, 2 = pending in, 3 = pending out
}
*/
export interface Relationship {
  From: string;
  To: string;
  Nickname: string;
  Type: number; // 0 = friend, 1 = blocked, 2 = pending in, 3 = pending out
}

/*
type User struct {
  ID          string   `json:"id" bson:"id"`
	Email       string   `json:"email" bson:"email"`
	Username    string   `json:"username" bson:"username"`
	Password    string   `json:"password" bson:"password"` // Deleted
	TOTPSecret  string   `json:"totp_secret" bson:"totp_secret"` // Deleted
	MFAEnabled  bool     `json:"mfa_enabled" bson:"mfa_enabled"`
	Banned      bool     `json:"banned" bson:"banned"`
	System      bool     `json:"system" bson:"system"`
	Bot         bool     `json:"bot" bson:"bot"`
	Avatar      string   `json:"avatar" bson:"avatar"`
	Bio         string   `json:"bio" bson:"bio"`
	DisplayName string   `json:"display_name" bson:"display_name"`
	Badges      []string `json:"badges" bson:"badges"`
}
*/

export interface Me {
  ID: string;
  Email: string;
  Username: string;
  // Password is deleted on the backend before being sent here for security reasons
  // TOTPSecret is deleted on the backend before being sent here for security reasons
  MFAEnabled: boolean;
  Banned: boolean;
  System: boolean;
  Bot: boolean;
  Avatar: string;
  Bio: string;
  DisplayName: string;
  Badges: string[];
  Relationships: Relationship[];
}
