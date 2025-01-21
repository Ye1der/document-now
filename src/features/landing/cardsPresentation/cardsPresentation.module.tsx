import { Card } from "./card";
import { CodeIcon, GitStructure, MagicStick } from "./icons";
import { ImageDecorator1, ImageDecorator2 } from "./imagesDecorator";
import { Line1, Line2 } from "./lines";

export function CardsPresentation() {
  return (
    <section className="flex justify-center items-center pt-24 pb-10">
      <div className="relative">
        <Card
          className="-translate-x-[300px]"
          title={'As your project'} 
          text={'the documentations are generated file by file and organized in a similar way to your project'}
          icon={<GitStructure/>}
        />
        <ImageDecorator1 className="absolute translate-x-[470px] -translate-y-[260px]" size={280}/>
        <Line1 className="z-10 absolute translate-x-[18px] -translate-y-[178px]"/>
        <Card
          className="translate-x-[260px] -translate-y-[136px]"
          title={'Generate easely'} 
          text={'Generating new documentation is easy, just click a button and you will see the magic.'}
          icon={<MagicStick/>}
        />
        <ImageDecorator1 className="absolute -translate-x-[490px] -translate-y-[230px]" size={280}/>
        <Line2 className="z-20 absolute -translate-x-[23px] -translate-y-[220px]"/>
        <ImageDecorator2 className="absolute translate-x-[300px]" size={195}/>
        <Card
          className="-translate-x-[180px] -translate-y-[110px]"
          title={'Code clarity'} 
          text={'Get clear and insightful documentation that helps you and your team understand your code.'}
          icon={<CodeIcon/>}
        />
      </div>
    </section>
  )
}