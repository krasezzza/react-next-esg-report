'use client';

export interface StepItem {
  index: number;
  label: string;
}

export interface StepperProps {
  steps: StepItem[];
  currentStep: number;
  isVisible?: boolean;
}

export default function Stepper({
  steps, // should be at least 2
  currentStep,
  isVisible = false,
}: StepperProps) {
  const lastStep = steps.reduce((prev, current) => {
    return current.index > prev.index ? current : prev;
  });

  const wrapperClasses = () => {
    let classes = 'w-full mt-[24px] mb-[16px] flex flex-col gap-y-[8px]';

    if (!isVisible) {
      classes = 'hidden';
    }

    return classes;
  };

  const segmentProgressWrapperClasses = (stepIndex: number) => {
    let classes = 'relative flex items-center justify-center';

    if (stepIndex !== 1) {
      classes += ' grow';
    }

    return classes;
  };

  const lineClasses = (stepIndex: number) => {
    let classes = 'w-full h-[2px]';

    if (stepIndex <= currentStep) {
      classes += ' bg-blue-main';
    } else {
      classes += ' bg-stroke-light';
    }

    return classes;
  };

  const circleClasses = (stepIndex: number) => {
    let classes = 'w-[10px] h-[10px] rounded-full shadow border';

    if (stepIndex <= currentStep) {
      classes += ' border-blue-light bg-blue-main';
    } else {
      classes += ' border-stroke-light bg-bgnd-light';
    }

    return classes;
  };

  const labelClasses = (stepIndex: number) => {
    let classes = 'text-[10px] absolute top-[16px]';

    if (stepIndex > 1 && stepIndex < lastStep.index) {
      classes += ' left-[50%] w-full text-center';
    }
    if (stepIndex === 1) {
      classes += ' left-0';
    }
    if (stepIndex === lastStep.index) {
      classes += ' right-0';
    }
    if (stepIndex === currentStep) {
      classes += ' font-semibold';
    } else {
      classes += ' font-light';
    }

    return classes;
  };

  return (
    <div className={wrapperClasses()}>
      <div className="w-full flex flex-row">
        {steps.map((step, idx) => (
          <div key={idx} className={segmentProgressWrapperClasses(step.index)}>
            {step.index !== 1 && <div className={lineClasses(step.index)} />}
            <div className={circleClasses(step.index)} />
            <span key={idx} className={labelClasses(step.index)}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
