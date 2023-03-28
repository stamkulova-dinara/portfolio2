import { FC } from "react";
import { Button } from "../../Button";
import "./style.css";

type CardProps = {
  photo: any;
  link: string;
  title: string;
  desc?: string;
  tools?: string;
  descB: boolean;
  left?:boolean
};
export const ProjectsCard: FC<CardProps> = ({
  photo,
  link,
  title,
  desc,
  descB, tools, left
}) => {
  return !descB ? (
    <div className="card mini">
      <img src={photo} alt="project" className="card__image" />
      <h4 className="card__title">{title}</h4>
      <a href={link} target="_blank">
        <Button children="View projects" />
      </a>
    </div>
  ) : (
    <div className={`large ${left ? "left" : "right" }`}>
      <img src={photo} alt="project" className="card__image" />
      <div>
        <h4 className="card__title">{title}</h4>
        <p className="card__desc">{desc}</p>
        <br/>
        <p className="card__desc">{tools}</p>
        <a href={link} target="_blank">
          <Button children="View projects" />
        </a>
      </div>
    </div>
  );
};
