import { Testimonial } from "./testimonialsData";

export const TestimonialItem: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="px-4">
      <h3 className="text-3xl font-semibold mb-12 dark:text-gray-300">"{testimonial.headline}"</h3>
      <div className="mb-8">
        <div className="w-24 h-24 rounded-full mx-auto mb-8 overflow-hidden border-2 border-white dark:border-gray-500">
          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
        </div>
        <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed dark:text-gray-400">"{testimonial.quote}"</p>
        <div className="text-center">
          <h4 className="text-xl font-semibold mb-1 dark:text-gray-300">{testimonial.name}</h4>
          <p className="text-lg opacity-90 dark:text-gray-400">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );