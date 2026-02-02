export const staffMembers = [
  {
    instagram: "ingridilahm",
    role: "Dedicação",
    roleType: "founder" as const,
  },
  {
    instagram: "lucas.hollowfan",
    role: "Dedicação",
    roleType: "admin" as const,
  },
  {
    instagram: "ana.coves",
    role: "Dedicação",
    roleType: "moderator" as const,
  },
  {
    instagram: "pedro.hcbr",
    role: "Dedicação",
    roleType: "moderator" as const,
  },
];

//

export const communityMembersHandles = [
  "ingridilahm",
  "santguigo",
  "marianacardoso.__",
  "rebecasvm",
  "agregattiemilly_",
  "cathycarmo",
  "dianadornelles",
  "jujubazevedo",
  "enchantedys",
  "silviamirabalterapeuta",
  "h3lloiamsam",
  "tasso.filhoo",
  "renanribeiro.png",
  "luanlodi",
  "babisbrum",
  "davi_shoot",
  "davi_terribile",
  "sakamotojeda",
  "liviataborda",
  "danikbechtold",
  "geraldinnenogueira",
  "angelornumes",
  "lon_jackie",
  "giovanaacamposs",
  "e.zequias",
  "natalia_ester3",
  "jess.alem.ilustra",
  "luizacamposdamata",
  "jumaciel1962",
  "norvisidiomas",
  "_yasminemarques",
];

export const roleConfig = {
  founder: {
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
  },
  admin: {
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
  },
  moderator: {
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
  },
};

export type RoleType = keyof typeof roleConfig;
