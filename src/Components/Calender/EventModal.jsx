import { useContext, useRef, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import "../../Styles/Auth.css";
import OutLineBtn from "../../Shared/OutLineBtn";
import PrimaryBtn from "../../Shared/PrimaryBtn";
import close from "../../assets/close.png";
import imgGrp from "../../assets/img-grp.png";
import cross from "../../assets/cross.png";
import dollar from "../../assets/dollar.png";

export default function EventModal() {
  const fileRef = useRef();
  const [selectedImages, setSelectedImages] = useState([]);
  const [individualUploadProgress, setIndividualUploadProgress] = useState({});
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (event) => {
    setLoading(true);

    const files = event.target.files;
    const imagesArray = Array.from(files).filter((file) => file.name);

    setSelectedImages((prevImages) => [...prevImages, ...imagesArray]);

    const initialProgress = Object.fromEntries(
      imagesArray.map((file) => [file.name, 0])
    );
    setIndividualUploadProgress(initialProgress);

    for (const image of imagesArray) {
      await uploadImage(image);
    }
  };

  const uploadImage = async (image) => {
    const totalSteps = 100;
    const stepDuration = 20;

    for (let step = 1; step <= totalSteps; step++) {
      await new Promise((resolve) => setTimeout(resolve, stepDuration));

      setIndividualUploadProgress((prevProgress) => ({
        ...prevProgress,
        [image.name]: step * (100 / totalSteps),
      }));
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const imagesArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setSelectedImages((prevImages) => [...prevImages, ...imagesArray]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleRemoveImage = (index) => {
    event.preventDefault();
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  const [isChecked, setChecked] = useState(false);

  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    const category = form.category.value;
    const subcategory = form.subcategory.value;
    const cost = form.cost.value;
    const date = form.date.value;
    const startTime = new Date(
      `2000-01-01T${form.startTime.value}`
    ).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const endTime = new Date(
      `2000-01-01T${form.endTime.value}`
    ).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const isWorking = isChecked;
    const files = selectedImages;

    const calendarEvent = {
      id: Date.now(),

      category,
      subcategory,
      cost,
      date,
      startTime,
      endTime,
      isWorking,
      files,
      day: daySelected.valueOf(),
    };
    if (isChecked) {
      calendarEvent.inProgress = true;
    }

    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
    setShowEventModal(false);
  }

  return (
    <div className="h-screen w-full  fixed z-50 left-0 top-0 flex justify-center items-center hour_spent ">
      <div className="bg-white rounded-3xl p-6 border max-w-[400px] h-[90%] overflow-y-scroll no-scrollbar">
        <header className="flex justify-between items-center mb-2">
          <p className="text-xl font-medium text-slate-950">Add Hours Spent</p>

          <button onClick={() => setShowEventModal(false)}>
            <img src={close} alt="" />
          </button>
        </header>
        <p className="text-slate-500 text-base mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sit
          senectus.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Select Category</label>
            <select name="category" required Value={selectedEvent?.category}>
              <option value="Repairs">Repairs</option>
              <option value="Management">Management</option>
              <option value="Analysis">Analysis</option>
              <option value="Consultation">Consultation</option>
            </select>
          </div>
          <div className="mb-4">
            <label>
              Select Subcategory <span> (Optional)</span>
            </label>
            <select name="subcategory" Value={selectedEvent?.subcategory}>
              <option value="Plumbing">Plumbing</option>
              <option value="Plumbing 2">Plumbing 2</option>
            </select>
          </div>
          <div className="mb-4">
            <label>Total Cost</label>
            <div className="relative">
              <input
                name="cost"
                style={{ paddingLeft: "30px" }}
                type="number"
                onKeyDown={(e) =>
                  ["e", "E", "+", "-", "."].includes(e.key) &&
                  e.preventDefault()
                }
                placeholder="0.00"
                required
                Value={selectedEvent?.cost}
              />
              <img
                style={{ top: "50%", transform: "translateY(-50%" }}
                className="absolute left-3"
                src={dollar}
                alt=""
              />
            </div>
          </div>
          <div className="mb-4">
            <label>Select Date</label>
            <input
              type="date"
              name="date"
              value={daySelected.format("YYYY-MM-DD")}
              required
              disabled
            />
          </div>
          <div className="flex items-center gap-4 mb-4 ">
            <div className="w-full">
              <label>Start Time </label>
              <input
                type={selectedEvent?.startTime ? "text" : "time"}
                Value={selectedEvent?.startTime}
                name="startTime"
                required
              />
            </div>
            <div className="w-full">
              <label>End Time </label>
              <input
                className={isChecked && "opacity-30"}
                type="time"
                disabled={isChecked}
                name="endTime"
                Value={selectedEvent?.endTime}
                required
              />
            </div>
          </div>
          <label
            style={{ display: "flex" }}
            className="flex items-center gap-4 mb-4"
          >
            <input
              className="hidden"
              type="checkbox"
              checked={isChecked}
              onClick={() => setChecked(!isChecked)}
            />
            <span
              className={`${
                isChecked && "bg-slate-200"
              } border  border-slate-200 rounded-sm h-[18px] w-[18px] flex items-center justify-center`}
            >
              {isChecked ? "✔" : ""}
            </span>
            <p>Currently Working</p>
          </label>
          <div>
            <label>
              Upload Attachment <span> (Optional)</span>
            </label>
            <input
              ref={fileRef}
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
              multiple
            />
          </div>

          <ImageDrop
            fileRef={fileRef}
            handleDrop={handleDrop}
            handleDragOver={handleDragOver}
            imgGrp={imgGrp}
            selectedImages={selectedImages}
            handleFileChange={handleFileChange}
            individualUploadProgress={individualUploadProgress}
            handleRemoveImage={handleRemoveImage}
            loading={loading}
          />

          <div className="flex flex-col lg:flex-row items-center gap-4 mt-6">
            <OutLineBtn onClick={() => setShowEventModal(false)} type="button">
              Cancel
            </OutLineBtn>
            <div className="w-full">
              <PrimaryBtn type="submit">Add Task</PrimaryBtn>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function ImageDrop({
  fileRef,
  handleDrop,
  handleDragOver,
  imgGrp,
  selectedImages,
  individualUploadProgress,
  handleRemoveImage,
}) {
  return (
    <>
      <div
        onClick={() => fileRef.current.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="cursor-pointer border rounded-xl border-dashed border-[#E5E7EB] text-center p-6"
      >
        <img className="mx-auto mb-5" src={imgGrp} alt="" />
        <p className="text-base font-medium text-[#1F2937] mb-1">
          Drop your files here or <span className="text-primary">browse</span>
        </p>
        <p className="text-[#9CA3AF] text-sm font-normal">Maximum size: 2MB</p>
      </div>

      <div className="mb-6 flex flex-col gap-4 mt-[6px]">
        {selectedImages &&
          selectedImages.length > 0 &&
          selectedImages?.map((item, idx) => (
            <ImageContainer
              key={idx}
              idx={idx}
              item={item}
              handleRemoveImage={handleRemoveImage}
              individualUploadProgress={individualUploadProgress}
            />
          ))}
      </div>
    </>
  );
}

function ImageContainer({
  idx,
  item,
  individualUploadProgress,
  handleRemoveImage,
}) {
  return (
    <div className="border border-slate-200 rounded-xl p-4 ">
      <div className="flex items-start gap-3 justify-between">
        <div className="flex items-center gap-3 mb-2">
          <img
            className="h-10 w-10 rounded-full"
            src={URL?.createObjectURL(item)}
            alt=""
          />
          <div>
            <p className="text-[#323539] text-sm font-medium">{item?.name}</p>
            <p className="text-[#858C95] text-xs font-normal">
              {(item?.size / 1024).toFixed(2)} kb
            </p>
          </div>
        </div>
        <button
          className="text-red-500"
          type="button"
          onClick={() => handleRemoveImage(idx)}
        >
          <img src={cross} alt="" />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-violet-50 h-2 w-full rounded-md">
          <div
            style={{
              width: `${individualUploadProgress[item?.name] || 100}%`,
            }}
            className="bg-primary rounded-md h-2"
          ></div>
        </div>
        <p className="text-xs font-medium">
          {Math.round(individualUploadProgress[item?.name] || 100)}%
        </p>
      </div>
    </div>
  );
}
