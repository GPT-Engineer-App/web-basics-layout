import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold text-orange-600">Pansos.</div>
          <Input placeholder="Search..." className="w-64" />
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Notifications</Button>
          <Button variant="ghost">Messages</Button>
          <Avatar>
            <AvatarImage src="https://via.placeholder.com/150" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-64 p-4 border-r overflow-y-auto">
          <ScrollArea className="h-full">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">My Group</h2>
              <ul className="space-y-2">
                <li>Pickolab Studio</li>
                <li>Aksantara Digital</li>
                <li>Design Jam Indonesia</li>
                <li>The Design Thinker</li>
              </ul>
            </div>
            <Separator />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Friends</h2>
              <ul className="space-y-2">
                <li>Jelly Rmdn</li>
                <li>Ali Husni</li>
                <li>Kurnialm</li>
                <li>Syeh Fakeh</li>
                <li>Mindes Kridian</li>
                <li>Budi Doremi</li>
                <li>Zidanrio</li>
                <li>Keanu Satria</li>
                <li>Dhimas Rasyad</li>
                <li>Arvin Aradhana</li>
                <li>Jamet Tmblng</li>
              </ul>
            </div>
          </ScrollArea>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 overflow-y-auto">
          <Card>
            <CardHeader>
              <CardTitle>Alvin Elian</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                This is my latest product kit for website landing page,
                dashboard, and mobile exploration about coffee shop called
                Kopiku. Hope you guys enjoy and press "L" if you like it. Any
                feedback or ...
              </p>
            </CardContent>
          </Card>
        </main>

        {/* Right Sidebar */}
        <aside className="w-64 p-4 border-l overflow-y-auto">
          <ScrollArea className="h-full">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">User Profile</h2>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="https://via.placeholder.com/150" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold">Kemito</div>
                  <div className="text-sm text-gray-500">UI/UX Designer</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="font-bold">11K Followers</div>
                <div className="text-sm text-gray-500">1.4K Following</div>
              </div>
            </div>
            <Separator />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Latest Activity</h2>
              <ul className="space-y-2">
                <li>
                  <div className="font-bold">arizidanrio, kurniamdj, and 78 others</div>
                  <div className="text-sm text-gray-500">likes your post - 5m</div>
                </li>
                <li>
                  <div className="font-bold">uibucket</div>
                  <div className="text-sm text-gray-500">
                    tagged you in post comment: @kemito this design is beautiful - 10m
                  </div>
                </li>
                <li>
                  <div className="font-bold">Jelly</div>
                  <div className="text-sm text-gray-500">started following you - 12m</div>
                </li>
              </ul>
            </div>
          </ScrollArea>
        </aside>
      </div>
    </div>
  );
};

export default Index;