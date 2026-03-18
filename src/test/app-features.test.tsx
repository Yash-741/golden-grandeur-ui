import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import VideoSection from "@/components/VideoSection";

describe("site interactions", () => {
  const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

  beforeEach(() => {
    openSpy.mockClear();
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("wires visible calls to action to real destinations", () => {
    render(
      <>
        <Navbar />
        <HeroSection />
        <VideoSection />
      </>,
    );

    expect(screen.getAllByRole("link", { name: "Book Now" })[0]).toHaveAttribute("href", "#contact");
    expect(screen.getByRole("link", { name: "Explore Our Venue" })).toHaveAttribute("href", "#gallery");
    expect(screen.getByRole("link", { name: "Plan Your Event" })).toHaveAttribute("href", "#contact");
    expect(screen.getByText("Catering Setup")).toBeInTheDocument();
  });

  it("opens and closes the gallery lightbox", () => {
    render(<GallerySection />);

    fireEvent.click(screen.getByAltText("Grand stage with floral arches and chandeliers"));
    expect(screen.getByRole("button")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button"));
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("submits a populated inquiry through mailto", () => {
    render(<ContactSection />);

    fireEvent.change(screen.getByPlaceholderText("Your Name"), { target: { value: "Asha" } });
    fireEvent.change(screen.getByPlaceholderText("Your Email"), { target: { value: "asha@example.com" } });
    fireEvent.change(screen.getByPlaceholderText("Phone Number"), { target: { value: "9999999999" } });
    fireEvent.change(screen.getByPlaceholderText("Tell us about your event..."), {
      target: { value: "Wedding reception for 300 guests" },
    });

    fireEvent.submit(screen.getByRole("button", { name: "Send Inquiry" }));

    expect(openSpy).toHaveBeenCalledTimes(1);
    expect(openSpy.mock.calls[0]?.[0]).toContain("mailto:poojaribanqueth@gmail.com");
    expect(openSpy.mock.calls[0]?.[1]).toBe("_self");
  });
});
