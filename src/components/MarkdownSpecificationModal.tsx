import React, { useState } from 'react';
import { MARKDOWN_SPECIFICATION_TEXT, DOCTOR_INFO } from '../data/content';
import { X, Copy, Check, Download, FileCode2 } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MarkdownSpecificationModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(MARKDOWN_SPECIFICATION_TEXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([MARKDOWN_SPECIFICATION_TEXT], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'oscar_rai_landing_copywriting.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#3E3D39]/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#FDFBF7] border border-[#E5E1D8] w-full max-w-4xl h-[85vh] rounded-sm shadow-2xl flex flex-col overflow-hidden animate-slideUp">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F9F7F2] border-b border-[#E5E1D8]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#9CAF88] text-white rounded flex items-center justify-center">
              <FileCode2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-[#2C2C28]">
                Спецификация UI/UX и Полный Текст (Markdown)
              </h3>
              <p className="text-[10px] uppercase font-bold text-[#8E8B82] tracking-widest">
                {DOCTOR_INFO.fullName} — Лендинг в Краснодаре
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E5E1D8] hover:border-[#9CAF88] text-[#3E3D39] text-xs font-semibold uppercase tracking-wider rounded-xs transition-all cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#9CAF88]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Скопировано!' : 'Копировать MD'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#9CAF88] hover:bg-[#8A9C76] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Скачать .md</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#8E8B82] hover:text-[#2C2C28] rounded transition-colors ml-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Markdown View */}
        <div className="flex-1 p-6 overflow-y-auto font-mono text-xs text-[#3E3D39] leading-relaxed bg-[#FDFBF7] select-text">
          <pre className="whitespace-pre-wrap font-mono max-w-none">
            {MARKDOWN_SPECIFICATION_TEXT}
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-white border-t border-[#E5E1D8] flex justify-between items-center text-[11px] text-[#8E8B82]">
          <span>Палитра: #FDFBF7 (Ivory Sand) / #9CAF88 (Sage Green)</span>
          <span className="italic">Готово к экспорту в Notion или GitHub</span>
        </div>
      </div>
    </div>
  );
};
