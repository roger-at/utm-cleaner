<<<<<<< HEAD
"use client";

=======
>>>>>>> 5757d758fca8f73a8d984132fb6efcccbdb57c41
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function UTMFormatter() {
  const [original, setOriginal] = useState("");
  const [cleaned, setCleaned] = useState("");

  const cleanCampaignName = (input) => {
    return input
      .replace(/\./g, "") // remove pontos
      .replace(/\s+/g, "_") // espaços para _
      .replace(/-+/g, "_") // hífens para _
      .replace(/[^a-zA-Z0-9_]/g, "") // remove caracteres especiais
      .replace(/_+/g, "_") // evita múltiplos underscores seguidos
      .replace(/^_+|_+$/g, "") // remove underscores no início/fim
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-xl shadow-xl">
        <CardContent className="p-6 space-y-4">
          <h1 className="text-2xl font-bold">UTM Cleaner</h1>
          <div>
            <label className="block text-sm font-medium mb-1">Nome da Campanha Original:</label>
            <Input
              placeholder="Cole aqui o nome da campanha"
              value={original}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Nome Limpo para UTM:</label>
            <Input value={cleaned} readOnly />
          </div>
          <div className="text-right">
            <Button onClick={handleCopy}>Copiar Nome Limpo</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}