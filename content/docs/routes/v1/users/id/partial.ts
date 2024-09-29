/*
type PartialUser struct {
	ID          string   `json:"id" bson:"id"`
	Username    string   `json:"username" bson:"username"`
	Bio         string   `json:"bio" bson:"bio"`
	System      bool     `json:"system" bson:"system"`
	Bot         bool     `json:"bot" bson:"bot"`
	Avatar      string   `json:"avatar" bson:"avatar"`
	DisplayName string   `json:"display_name" bson:"display_name"`
	Badges      []string `json:"badges" bson:"badges"`
}

*/

export interface Partial {
  ID: string;
  Username: string;
  Bio: string;
  System: boolean;
  Bot: boolean;
  Avatar: string;
  DisplayName: string;
  Badges: string[];
}
