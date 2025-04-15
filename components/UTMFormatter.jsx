"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";

export default function UTMFormatter() {
  const [original, setOriginal] = useState("");
  const [cleaned, setCleaned] = useState("");

  const cleanCampaignName = (input) => {
    return input
      .replace(/\./g, "")
      .replace(/\s+/g, "_")
      .replace(/-+/g, "_")
      .replace(/[^a-zA-Z0-9_]/g, "")
      .replace(/_+/g, "_")
      .replace(/^_+|_+$/g, "")
      .toUpperCase();
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setOriginal(input);
    setCleaned(cleanCampaignName(input));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cleaned);
      alert("Nome limpo copiado para a área de transferência!");
    } catch (err) {
      alert("Erro ao copiar. Tente manualmente.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <Card className="w-full max-w-xl shadow-xl border border-gray-700 bg-gray-800">
        <CardContent className="p-8 space-y-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <img src="/logo.png" alt="Logo UTM Cleaner" className="w-16 h-16 object-contain" />
            <h1 className="text-4xl font-extrabold text-center">UTM Cleaner</h1>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Nome da Campanha Original:</label>
            <Input
              placeholder="Cole aqui o nome da campanha"
              value={original}
              onChange={handleChange}
              className="bg-gray-700 text-white border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Nome Limpo para UTM:</label>
            <Input
              value={cleaned}
              readOnly
              className="bg-gray-700 text-white border-gray-600"
            />
          </div>

          <div className="text-right">
            <Button onClick={handleCopy}>Copiar Nome Limpo</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
