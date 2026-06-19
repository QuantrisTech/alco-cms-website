"use client";
import React, { useState } from "react";
import ContentSection from "@/component/contentSection";
import ProgramLeadModal from "@/component/modal/programLeadModal";
import { ContentSectionType } from "@/type/contentSection";

type Props = {
  data?: ContentSectionType;
};

export default function ContentSectionWithModal({ data }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState("");
  const [selectedProgramName, setSelectedProgramName] = useState("");

  const handleItemClick = (item: any) => {
    if (!item?.programId) return; // jis card pe programId nahi, kuch nahi hoga
    setSelectedProgramId(item.programId);
    setSelectedProgramName(item.title || "");
    setModalOpen(true);
  };

  return (
    <>
      <ContentSection data={data} onItemClick={handleItemClick} />
      <ProgramLeadModal
        isOpen={modalOpen}
        programId={selectedProgramId}
        programName={selectedProgramName}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}