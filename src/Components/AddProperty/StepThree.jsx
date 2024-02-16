import { useContext, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import GlobalContext from "../../context/GlobalContext";
import AuthTitle from "../../Shared/AuthTitle";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import OutLineBtn from "../../Shared/OutLineBtn";
import imgGrp from "../../assets/img-grp.png";

const StepThree = ({ setStepper }) => {
  const { setPropertyData } = useContext(GlobalContext);
  const fileRef = useRef();
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    for (const file of files) {
      if (file.size <= 2 * 1024 * 1024) {
        setSelectedImages((prevImages) => [...prevImages, file]);
      } else {
        console.log(`File ${file.name} exceeds the maximum size limit (2MB)`);
      }
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    setSelectedImages((prevImages) => [...prevImages, ...Array.from(files)]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  const handleContinue = () => {
    setPropertyData((prevData) => ({
      ...prevData,
      images: selectedImages,
    }));
    setStepper(4);
  };

  return (
    <>
      <p className="text-primary font-bold text-sm mb-3">Step 03</p>
      <AuthTitle>Upload Image </AuthTitle>

      <div>
        <input
          ref={fileRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
          multiple
        />
        <div
          onClick={() => fileRef.current.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="cursor-pointer border rounded-xl border-dashed border-[#E5E7EB] text-center py-16 mt-5 lg:mt-10 mb-4"
        >
          <img className="mx-auto mb-5" src={imgGrp} alt="" />
          <p className="text-base font-medium text-[#1F2937] mb-1">
            Drop your files here or <span className="text-primary">browse</span>
          </p>
          <p className="text-[#9CA3AF] text-sm font-normal">
            Maximum size: 2MB
          </p>
        </div>
        <div className="img_box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {selectedImages.length > 0 &&
            selectedImages.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Selected ${index + 1}`}
                  className="w-full  object-cover rounded-3xl h-32"
                />
                <button
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-2 right-2 icon z-10 h-8 w-8"
                >
                  <RxCross2 />
                </button>
              </div>
            ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-4 mt-5 lg:mt-10">
          <div onClick={() => setStepper(2)} className="w-full">
            <OutLineBtn>Go Back</OutLineBtn>
          </div>
          <div onClick={handleContinue} className="w-full">
            <PrimaryBtn>Continue</PrimaryBtn>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepThree;
