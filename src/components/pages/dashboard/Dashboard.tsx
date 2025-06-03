import { useMemo } from "react";
import General from "./general";
import AddPost from "./addPost";
import Account from "./account";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import { House, BadgePlus, User } from "lucide-react";
export default function Dashboard() {
  const dashboardItems = useMemo(
    () => [
      {
        id: "general",
        title: "Geral",
        item: <General />,
        icon: House,
      },
      {
        id: "add-post",
        title: "Novo post",
        item: <AddPost />,
        icon: BadgePlus,
      },
      {
        id: "account",
        title: "Conta",
        item: <Account />,
        icon: User,
      },
    ],
    [],
  );

  return (
    <div className="relative flex min-h-dvh w-full items-center justify-center">
      <Tabs className="flex w-full items-center" defaultValue="general">
        <TabsList className="absolute bottom-10">
          {dashboardItems.map((item) => {
            const Icon = item.icon;

            return (
              <TabsTrigger value={item.id} key={item.id}>
                <Icon />
                <p className="max-sm:sr-only">{item.title}</p>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {dashboardItems.map((item) => (
          <TabsContent value={item.id} key={item.id}>
            {item.item}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
