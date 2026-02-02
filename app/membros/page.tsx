import { Header } from "@/components/hollow-coves/header";
import { Footer } from "@/components/hollow-coves/footer";
import { Instagram, Crown, Shield, Star, Users } from "lucide-react";
import Link from "next/link";
import {
  staffMembers,
  communityMembersHandles,
  roleConfig,
  type RoleType,
} from "@/lib/members-data";

const roleIcons = {
  founder: Crown,
  admin: Shield,
  moderator: Star,
};

function StaffMemberCard({
  instagram,
  role,
  roleType,
}: {
  instagram: string;
  role: string;
  roleType: RoleType;
}) {
  const IconComponent = roleIcons[roleType];
  const config = roleConfig[roleType];

  return (
    <Link
      href={`https://instagram.com/${instagram}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
        <div className="relative w-28 h-28 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary/20 to-accent/20 blur-md group-hover:blur-lg transition-all" />
          <div
            className={`relative w-28 h-28 rounded-full overflow-hidden border-2 ${config.borderColor} group-hover:border-primary transition-colors bg-muted flex items-center justify-center`}
          >
            <Users className="w-12 h-12 text-muted-foreground" />
          </div>
          <div
            className={`absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center ${config.color}`}
          >
            <IconComponent className="w-4 h-4" />
          </div>
        </div>
        <p className={`text-sm font-medium mb-2 ${config.color}`}>{role}</p>
        <div className="flex items-center justify-center gap-1.5 text-muted-foreground group-hover:text-primary transition-colors">
          <Instagram className="w-4 h-4" />
          <span className="text-sm">@{instagram}</span>
        </div>
      </div>
    </Link>
  );
}

function CommunityMemberCard({ instagram }: { instagram: string }) {
  return (
    <Link
      href={`https://instagram.com/${instagram}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div className="bg-card/50 border border-border rounded-lg p-4 text-center hover:border-primary/50 hover:bg-card transition-all duration-300">
        <div className="relative w-20 h-20 mx-auto mb-3">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-border group-hover:border-primary/50 transition-colors bg-muted flex items-center justify-center">
            <Users className="w-8 h-8 text-muted-foreground" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-muted-foreground group-hover:text-primary transition-colors">
          <Instagram className="w-3.5 h-3.5" />
          <span className="text-sm">@{instagram}</span>
        </div>
      </div>
    </Link>
  );
}

export default function MembrosPage() {
  const totalMembers = staffMembers.length + communityMembersHandles.length;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 md:pt-24">
        <section className="py-16 md:py-24 bg-linear-to-b from-card to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-medium">
                Nossa Comunidade
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Membros do Fanclube
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Conheça os fãs que fazem parte da comunidade Hollow Coves
                Brasil. Unidos pela paixão por música folk e boas vibrações.
              </p>
              <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">
                  {totalMembers} membros
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                Equipe do Fanclube
              </h2>
              <p className="text-muted-foreground">
                Os membros que ajudam a manter nossa comunidade ativa e
                acolhedora
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              {staffMembers.map((member) => (
                <StaffMemberCard
                  key={member.instagram}
                  instagram={member.instagram}
                  role={member.role}
                  roleType={member.roleType}
                />
              ))}
            </div>
          </div>
        </section> */}

        <section className="py-16 md:py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                Membros da Comunidade
              </h2>
              <p className="text-muted-foreground">
                Fãs incríveis que compartilham o amor por Hollow Coves
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6  gap-3 md:gap-4 max-w-6xl mx-auto">
              {communityMembersHandles.map((instagram) => (
                <CommunityMemberCard key={instagram} instagram={instagram} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                Quer fazer parte?
              </h2>
              <p className="text-muted-foreground mb-8">
                Siga @hollowcovesbrasil no Instagram e venha fazer parte da
                família!
              </p>
              <Link
                href="https://instagram.com/hollowcovesbrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @hollowcovesbrasil
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
