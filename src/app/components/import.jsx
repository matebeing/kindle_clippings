'use client';

import { useContext } from 'react';
import { FileContext } from '../hooks/fileContext.js';
import {useRouter} from 'next/navigation'
export default function Import()  {
    const router = useRouter();
    const { setFileData } = useContext(FileContext);

    const handleFile = event => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            const reader = new FileReader();
    
            reader.onload = function(e) {
                if(!e.target.result.includes("==========")) {
                    alert("Arquivo inválido. Tente novamente.")
                } else {
                    setFileData(e.target.result);
                    router.push('/clippings');
                }
            };
    
            reader.readAsText(i);
        }
    };
    
    
    return (
        <div className="flex flex-col">

            <h1 className="font-bold text-xl">Importe seus recortes</h1>
            <p className="mt-5">Você deve usar um cabo USB para transferir os dados do seu Kindle para o seu computador. Selecione o arquivo no diretório.</p>

            <div className="mt-5">
                <p className="text-gray-500">Localização do arquivo</p>
                <div className="flex items-center p-2 bg-[#F8F8F8] rounded-lg">
                    <p>C://kindle/clippings.txt</p>
                </div>
            </div>

            <div className="flex items-center justify-center  text-white mt-5 p-3 bg-[#627FE7] cursor-pointer rounded-lg">
                <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
                    <p className="text-sm w-full h-full text-center">IMPORTAR</p>
                    <input id="dropzone-file" type="file" accept=".txt" required onChange={handleFile} className="hidden" />
                </label>
            </div>
        </div>
    )
}