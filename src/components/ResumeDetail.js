import React from "react";

function ResumeDetail({
  heading,
  title,
  subTitle,
  duration,
  description,
  descriptionLink,
  subTitleLink,
}) {
  return (
    <div>
      <div className="row">
        <div className="detail-heading col-lg-4">{heading}</div>
        <div className="col-lg-8">
          <div className="opacity-25 separator my-2 " />
          <div className="d-flex justify-content-between align-items-center">
            <div>
              {!!title && <div className="title">{title}</div>}
              {!!subTitle && (
                <div className="sub-title">
                  {subTitleLink ? (
                    <a href={subTitleLink}>{subTitle}</a>
                  ) : (
                    subTitle
                  )}
                </div>
              )}
            </div>
            <div>{duration}</div>
          </div>
          <div className="w-75 mt-2 my-4">
            {descriptionLink ? (
              <a href={descriptionLink}>{description}</a>
            ) : (
              description
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeDetail;
