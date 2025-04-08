"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../../../convex/_generated/api";
import { useMutation } from "convex/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BriefcaseIcon, UserIcon } from "lucide-react";

export default function SelectRolePage() {
  const router = useRouter();
  const updateUserRole = useMutation(api.users.updateUserRole);
  const [loading, setLoading] = useState(false);

  const handleRoleSelection = async (role: "candidate" | "interviewer") => {
    setLoading(true);
    try {
      await updateUserRole({ role });
      router.push("/"); // Redirect to home after selection
    } catch (error) {
      console.error("Error updating role:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Select Your Role
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Please choose whether you want to sign up as a Candidate or an Interviewer.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Candidate Card */}
          <Card
            onClick={() => handleRoleSelection("candidate")}
            className="cursor-pointer hover:shadow-xl transition-all border border-gray-300"
          >
            <CardHeader className="text-center">
              <UserIcon className="w-12 h-12 text-blue-600 mx-auto" />
              <CardTitle className="text-lg font-semibold mt-3">Candidate</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-500 text-sm text-center">
              Attend interviews.
            </CardContent>
          </Card>

          {/* Interviewer Card */}
          <Card
            onClick={() => handleRoleSelection("interviewer")}
            className="cursor-pointer hover:shadow-xl transition-all border border-gray-300"
          >
            <CardHeader className="text-center">
              <BriefcaseIcon className="w-12 h-12 text-green-600 mx-auto" />
              <CardTitle className="text-lg font-semibold mt-3">Interviewer</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-500 text-sm text-center">
              Conduct interviews and manage hiring.
            </CardContent>
          </Card>
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="text-center mt-6">
            <p className="text-blue-500 font-semibold">Updating role...</p>
          </div>
        )}
      </div>
    </div>
  );
}
