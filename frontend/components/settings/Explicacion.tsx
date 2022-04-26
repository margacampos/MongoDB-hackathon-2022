import * as React from 'react';

export interface IExplicacionProps {
    settingId:string;
}

export default function Explicacion (props: IExplicacionProps) {
    const exp = [
        {
            id:"accessibility",
            exp:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia repudiandae saepe aut quisquam reiciendis maxime sit quibusdam provident delectus incidunt suscipit non, consectetur nesciunt ea asperiores, ab, qsdjds dkie fjga skkkkkkkc l."
        },
        {
            id:"positive",
            exp:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia repudiandae saepe aut quisquam reiciendis maxime sit quibusdam provident delectus incidunt suscipit non, consectetur nesciunt ea asperiores, ab, quos corporis dolor."
        }
    ];
  return (
    <div>
      <p>{exp.map((i)=>i.id===props.settingId?i.exp:"")}</p>
    </div>
  );
}
