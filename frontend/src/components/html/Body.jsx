import GenericAccordion from "../GenericAccordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { projects, work_history, education } from "../../assets/Data";
import tailwindConfig from "../../../tailwind.config";

const Body = ({ disable }) => {
  return (
    <div className="w-full">
      <GenericAccordion
        disabled={disable}
        sx={{
          backgroundColor: tailwindConfig.theme.extend.colors.deepGrayBlue,
          color: tailwindConfig.theme.extend.colors.lightGrayBlue,
        }}
        expandIcon={<ExpandMoreIcon className="text-lightGrayBlue" />}
        title="PROJECTS"
        body={projects.map((project, ind) => (
          <div
            key={ind}
            className="-mx-4 even:bg-softGrayBlue even:py-1 last:-mb-4"
          >
            <div className="m-4 space-y-1">
              <p className="text-sm font-bold">{project.title}</p>
              <p className="text-xs">
                <strong>Description: </strong>
                {project.description}
              </p>
              <div className="text-xs">
                <p className="font-bold">Key Features: </p>
                <ul className="list-decimal mx-4">
                  {project.features.map((feature, ind) => (
                    <li key={ind} className="my-1">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>{" "}
              <p className="text-xs">
                <strong>Results: </strong>
                {project.post_comments}
              </p>
            </div>
          </div>
        ))}
        aria-controls="panel1-content"
        id="panel1-header"
        className="font-bold text-lg"
      />
      <GenericAccordion
        disabled={disable}
        sx={{
          backgroundColor: tailwindConfig.theme.extend.colors.deepGrayBlue,
          marginTop: "1.5rem" /* 24px */,
          color: tailwindConfig.theme.extend.colors.lightGrayBlue,
        }}
        expandIcon={<ExpandMoreIcon className="text-lightGrayBlue" />}
        title="EMPLOYMENT HISTORY"
        body={
          <ul>
            {work_history.map((work, ind) => (
              <li
                key={ind}
                className="-mx-4 even:bg-softGrayBlue even:py-1 last:-mb-4"
              >
                <div className="m-4">
                  <p className="text-xs">
                    {work.start} - {work.end}
                  </p>
                  <p className="text-sm font-bold">
                    {work.title}, {work.company}
                  </p>
                  <p className="text-sm">{work.location}</p>
                  <ul className="list-disc mx-4">
                    {work.duties.map((duty, ind) => (
                      <li key={ind} className="text-xs my-1">
                        {duty}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        }
        aria-controls="panel2-content"
        id="panel2-header"
        className="font-bold text-lg tracking-widest"
      />
      <GenericAccordion
        disabled={disable}
        sx={{
          backgroundColor: tailwindConfig.theme.extend.colors.deepGrayBlue,
          color: tailwindConfig.theme.extend.colors.lightGrayBlue,
          marginTop: "1.5rem" /* 24px */,
        }}
        expandIcon={<ExpandMoreIcon className="text-lightGrayBlue" />}
        title="EDUCATION"
        body={
          <ul>
            {education.map((edu, ind) => (
              <li
                key={ind}
                className="-mx-4 even:bg-softGrayBlue even:py-1 last:-mb-4"
              >
                <div className="m-4">
                  <p className="text-xs">
                    {edu.start} - {edu.end}
                  </p>
                  <p className="text-sm font-bold">
                    {edu.degree}, {edu.school}
                  </p>
                  <p className="text-sm">{edu.location}</p>
                  <p className="text-sm">Major: {edu.major}</p>
                  <ul className="list-disc mx-4">
                    {edu.extras.map((extra, ind) => (
                      <li key={ind} className="text-xs my-1">
                        {extra}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        }
        aria-controls="panel3-content"
        id="panel3-header"
        className="font-bold text-lg tracking-widest"
      />
    </div>
  );
};

export default Body;
